'use client'
import React, { useEffect, useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const page: React.FC = () => {
  const calendarRef = useRef<FullCalendar>(null)
  const contextMenuRef = useRef<HTMLDivElement>(null)
  const [selectedEvent, setSelectedEvent] = useState<null | any>(null)

  // Function to check overlapping events
  // Function to check overlapping events
  const isOverlapping = (newEvent: any) => {
    const calendarApi = calendarRef.current?.getApi()
    if (!calendarApi) return false

    return calendarApi.getEvents().some((existingEvent) => {
      if (
        existingEvent.id !== newEvent.id &&
        existingEvent.title === 'Availability'
      ) {
        const newStart = newEvent.start?.getTime() // Convert to timestamp for safe comparison
        const newEnd = newEvent.end?.getTime()
        const existingStart = existingEvent.start?.getTime()
        const existingEnd = existingEvent.end?.getTime()

        if (
          newStart !== undefined &&
          newEnd !== undefined &&
          existingStart !== undefined &&
          existingEnd !== undefined
        ) {
          return newStart < existingEnd && newEnd > existingStart
        }
      }
      return false
    })
  }

  // Handle event right-click (context menu)
  const handleEventClick = (info: any) => {
    info.jsEvent.preventDefault()
    setSelectedEvent(info.event)

    const contextMenu = contextMenuRef.current
    if (contextMenu) {
      contextMenu.style.display = 'block'
      contextMenu.style.left = `${info.jsEvent.pageX - 280}px`
      contextMenu.style.top = `${info.jsEvent.pageY}px`
    }
  }

  // Handle event deletion
  const handleDeleteEvent = () => {
    if (selectedEvent) {
      selectedEvent.remove()
      setSelectedEvent(null)
      if (contextMenuRef.current) {
        contextMenuRef.current.style.display = 'none'
      }
    }
  }

  useEffect(() => {
    const handleClickOutside = () => {
      if (contextMenuRef.current) {
        contextMenuRef.current.style.display = 'none'
      }
    }

    document.addEventListener('click', handleClickOutside)
    document
      .getElementById('delete-event')
      ?.addEventListener('click', handleDeleteEvent)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document
        .getElementById('delete-event')
        ?.removeEventListener('click', handleDeleteEvent)
    }
  }, [selectedEvent])

  return (
    <>
      <h3 style={{ textAlign: 'center', margin: '20px', color: 'gray' }}>
        Consultants Schedules
      </h3>
      <div style={{ padding: '20px' }}>
        <FullCalendar
          ref={calendarRef}
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          editable
          droppable
          eventResizableFromStart
          selectable
          headerToolbar={false}
          allDaySlot={false}
          slotLabelFormat={{
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          }}
          dayHeaderFormat={{ weekday: 'long' }}
          select={(info) => {
            const calendarApi = calendarRef.current?.getApi()
            if (calendarApi) {
              calendarApi.addEvent({
                title: 'Availability',
                start: info.startStr,
                end: info.endStr,
                allDay: info.allDay,
                backgroundColor: '#01306f',
                borderColor: '#01306f',
              })
            }
          }}
          eventDrop={(info) => {
            if (isOverlapping(info.event)) {
              alert('Cannot overlap Availability events!')
              info.revert()
            }
          }}
          eventResize={(info) => {
            if (isOverlapping(info.event)) {
              alert('Cannot resize to overlap another Availability event!')
              info.revert()
            }
          }}
          eventClick={handleEventClick} // Now properly defined
        />

        {/* Context Menu */}
        <div
          ref={contextMenuRef}
          id="context-menu"
          style={{
            display: 'none',
            position: 'absolute',
            background: '#fff',
            border: '1px solid #ccc',
            padding: '10px',
          }}
        >
          <button id="delete-event">Delete Event</button>
        </div>

        {/* Save Events Button */}
        <button
          id="saveEvents"
          className="btn btn--primary"
          onClick={() => {
            const calendarApi = calendarRef.current?.getApi()
            if (calendarApi) {
              const events = calendarApi.getEvents().map((event) => ({
                id: event.id || null,
                title: event.title,
                start: event.start?.toISOString(),
                end: event.end?.toISOString() || null,
              }))
              console.log(JSON.stringify(events, null, 2))
            }
          }}
        >
          Save Events
        </button>
      </div>
    </>
  )
}

export default page

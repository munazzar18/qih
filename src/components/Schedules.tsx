'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { EventResizeDoneArg } from '@fullcalendar/interaction'
import type { EventApi, DateSelectArg, EventDropArg } from '@fullcalendar/core'

interface AvailabilityEvent {
  id?: string | number
  title: string
  start: string | Date
  end: string | Date | null
  user_id?: number
  created_at?: string
  updated_at?: string
  backgroundColor?: string
  borderColor?: string
  allDay?: boolean
}

interface AvailabilityCalendarProps {
  initialAvailability?: AvailabilityEvent[]
  onUpdateAvailability?: (events: AvailabilityEvent[]) => void
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
  initialAvailability = [],
  onUpdateAvailability,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null)
  const calendarInstanceRef = useRef<Calendar | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null)
  const [contextMenuPosition, setContextMenuPosition] = useState({
    left: 0,
    top: 0,
  })
  const [showContextMenu, setShowContextMenu] = useState(false)

  useEffect(() => {
    if (calendarRef.current) {
      const calendarEl = calendarRef.current

      const calendar = new Calendar(calendarEl, {
        plugins: [timeGridPlugin, interactionPlugin],
        events: [],
        dayHeaderFormat: { weekday: 'long' },
        initialView: 'timeGridWeek',
        editable: true,
        droppable: true,
        eventResizableFromStart: true,
        allDaySlot: false,
        selectable: true,
        headerToolbar: false,
        timeZone: 'local',
        initialDate: '2023-01-01',
        slotLabelFormat: {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        },
        select: (info: DateSelectArg) => {
          const newEvent = calendar.addEvent({
            title: 'Availability',
            start: info.startStr,
            end: info.endStr,
            allDay: info.allDay,
            backgroundColor: '#01306f',
            borderColor: '#01306f',
          })

          calendar.unselect()
          if (newEvent) {
            mergeOverlappingEvents(newEvent)
          }
        },
        eventDrop: (info: EventDropArg) => {
          const event = info.event
          const eventStart = event.start
          const eventEnd =
            event.end ||
            new Date((eventStart as Date).getTime() + 60 * 60 * 1000)

          // Ensure the event does not exceed a single day
          if ((eventStart as Date).getDate() !== (eventEnd as Date).getDate()) {
            event.setEnd(
              new Date(
                (eventStart as Date).getFullYear(),
                (eventStart as Date).getMonth(),
                (eventStart as Date).getDate(),
                23,
                59,
                59
              )
            )
          }

          mergeOverlappingEvents(event)
        },
        eventDidMount: (info) => {
          info.el.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            setSelectedEvent(info.event)

            // Position context menu
            setContextMenuPosition({
              left: e.pageX - 290,
              top: e.pageY - 100,
            })
            setShowContextMenu(true)
          })
        },
        eventResize: (info: EventResizeDoneArg) => {
          mergeOverlappingEvents(info.event)
        },
      })

      const mergeOverlappingEvents = (newEvent: EventApi) => {
        const events = calendar.getEvents()
        let mergedStart = newEvent.start as Date
        let mergedEnd = newEvent.end as Date

        events.forEach((event) => {
          if (event.id !== newEvent.id && event.title === 'Availability') {
            if (
              (newEvent.start as Date) < (event.end as Date) &&
              (newEvent.end as Date) > (event.start as Date)
            ) {
              // Extend merged start and end times
              mergedStart = new Date(
                Math.min(mergedStart.getTime(), (event.start as Date).getTime())
              )
              mergedEnd = new Date(
                Math.max(mergedEnd.getTime(), (event.end as Date).getTime())
              )

              // Remove the existing overlapping event
              event.remove()
            }
          }
        })

        // Remove the newEvent itself before adding the merged one
        newEvent.remove()

        // Add merged event
        calendar.addEvent({
          id: Math.random().toString(36).substr(2, 9),
          title: 'Availability',
          start: mergedStart,
          end: mergedEnd,
          allDay: false,
          backgroundColor: '#01306f',
          borderColor: '#01306f',
        })
      }

      calendar.render()
      calendarInstanceRef.current = calendar

      return () => {
        calendar.destroy()
      }
    }
  }, [initialAvailability])

  // Hide context menu when clicking anywhere else
  useEffect(() => {
    const handleClick = () => {
      setShowContextMenu(false)
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      selectedEvent.remove()
      setSelectedEvent(null)
      setShowContextMenu(false)
    }
  }

  const handleSaveEvents = () => {
    if (calendarInstanceRef.current) {
      const events = calendarInstanceRef.current.getEvents().map((event) => {
        // Ensure start and end are never null for TypeScript compatibility
        const start = event.start || new Date()
        const end = event.end || new Date(start.getTime() + 30 * 60 * 1000)

        return {
          id: event.id || Math.random().toString(36).substr(2, 9),
          title: event.title,
          start: start,
          end: end,
          user_id: event.extendedProps.user_id || 5,
          created_at:
            event.extendedProps.created_at || new Date().toISOString(),
          updated_at:
            event.extendedProps.updated_at || new Date().toISOString(),
        }
      })

      console.log(events)

      if (onUpdateAvailability) {
        onUpdateAvailability(events as AvailabilityEvent[])
      }
    }
  }

  return (
    <div className="position-relative w-100 h-100">
      <div ref={calendarRef} id="calendar" className="w-100 h-100"></div>

      {/* Context Menu */}
      {showContextMenu && (
        <div
          id="context-menu"
          className="position-absolute bg-white shadow-sm p-2 rounded z-3"
          style={{
            left: `${contextMenuPosition.left}px`,
            top: `${contextMenuPosition.top}px`,
          }}
        >
          <button
            id="delete-event"
            className="btn btn-danger btn-sm"
            onClick={handleDeleteEvent}
          >
            Delete Event
          </button>
        </div>
      )}

      {/* Save Button */}
      <div className="mt-4">
        <button
          id="saveEvents"
          className="btn btn-primary"
          onClick={handleSaveEvents}
        >
          Save Availability
        </button>
      </div>
    </div>
  )
}

export default AvailabilityCalendar

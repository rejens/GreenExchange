import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RxCalendar } from 'react-icons/rx'
import { GoLocation, GoTrophy } from 'react-icons/go'

const EventsSection = async () => {
  //   const events = await getAllEvents()

  const events = [
    {
      _id: '1',
      name: 'Tree Planting Event',
      slug: 'tree-planting-1',
      date: '2023-12-31',
      when: '8 Days Ago',
      organizer: 'Mechi Multiple Campus',
      bannerImage:
        'https://media.istockphoto.com/id/1201112520/photo/planting-tree-in-garden-concept-save-world-green-earth.jpg?s=612x612&w=0&k=20&c=nYvD6suoUax7iOhi8vxc5X-oHtS5C2Ifu6x9LWrrdgg=',
      location: 'Bhadrapur, Jhapa',
      description: 'Join us in planting trees to create a greener environment.',
    },
    {
      _id: '2',
      name: 'Tree Planting Event',
      slug: 'tree-planting-event',
      date: '2024-01-16',
      when: 'Upcomming',
      organizer: 'Green Earth Foundation',
      bannerImage:
        'https://images.unsplash.com/photo-1625758476104-f2ed6c81248f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZSUyMHBsYW50aW5nfGVufDB8fDB8fHww',
      location: 'Pathari Forest, Jhapa',
      description: 'Join us in planting trees to create a greener environment.',
    },
    {
      _id: '3',
      name: 'River Cleaning Campaign',
      slug: 'river-cleaning-campaign',
      date: '2024-01-22',
      when: 'Upcomming',
      organizer: 'Clean Rivers Initiative',
      bannerImage:
        'https://imgs.mongabay.com/wp-content/uploads/sites/30/2019/02/25103822/Banner1-6-e1551071497420.jpg',
      location: 'Koshi River, Sunsari',
      description: 'Help us clean our rivers for a healthier ecosystem.',
    },
  ]

  return (
    <section id='events' className='my-32'>
      <div className='px-4 container mx-auto'>
        <div className='mb-10 flex flex-col gap-y-3 md:flex-row justify-between md:items-center'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-5xl leading-[4rem]'>
              Events & Programs
            </h1>
            <p className='text-black/60'>
              What events and programs I have attended
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 w-full lg:grid-cols-3 2xl:grid-cols-4 gap-y-10 gap-x-16'>
          {events?.map((event) => (
            <div
              key={event._id}
              className='bg-white shadow-primary border border-black/5  rounded-3xl'
            >
              <Link
                href={`/events-and-programs/${event.slug}`}
                className='relative'
              >
                <img
                  alt={event.name}
                  src={event.bannerImage}
                  width={500}
                  height={500}
                  className='rounded-t-3xl cursor-pointer w-full object-cover'
                />
                <div>
                  <div className='absolute bottom-0 left-0 bg-green-500 text-white text-xs px-2 pe-3 py-1 rounded-br-3xl'>
                    {event.when}
                  </div>
                </div>
              </Link>
              <div className='px-6 md:px-10 py-6 md:py-8'>
                <div className='flex items-center justify-around mb-7'>
                  <div className='flex gap-2 items-center'>
                    <RxCalendar className='w-[1.5rem] h-[2rem] text-green-500' />
                    <p className='leading-8 text-black/70'>
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className='flex gap-2 '>
                    <GoLocation className='w-[1.5rem] h-[2rem] text-green-500 ' />
                    <p className='leading-8 text-black/70'>{event.location}</p>
                  </div>
                </div>
                <Link
                  href={`/events-and-programs/${event.slug}`}
                  className='text-2xl font-semibold hover:underline hover:text-green-500 transition'
                >
                  <h1>
                    {`${event.name}, ${event.organizer}`.slice(0, 50)}
                    {`${event.name}, ${event.organizer}`.length > 50
                      ? '...'
                      : ''}
                  </h1>
                </Link>
                <p className='my-3 text-black/70 leading-8'>
                  {event.description.slice(0, 170)}...
                </p>
                <Link
                  href={`/events-and-programs/${event.slug}`}
                  className='underline text-green-500'
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection

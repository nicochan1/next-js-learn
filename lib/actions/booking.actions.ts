'use server'

import Booking from '@/database/booking.model'
import connectDB from '@/lib/mongodb'

export const createBooking = async (eventId: string, email: string) => {
  try {
    await connectDB()
    
    // Create new booking
    const booking = await Booking.create({
      eventId,
      email,
    })
    
    return {
      success: true,
      message: 'Booking created successfully',
      booking: booking._id,
    }
  } catch (error: any) {
    console.error('Booking error:', error)
    
    if (error.code === 11000) {
      // Duplicate entry error
      return {
        success: false,
        message: 'You have already booked this event with this email',
      }
    }
    
    return {
      success: false,
      message: error.message || 'Failed to create booking',
    }
  }
}

'use client'
import { useState } from "react"
import { createBooking } from "@/lib/actions/booking.actions"

const BookEvent = ({ eventId }: { eventId: string }) => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const result = await createBooking(eventId, email)
            
            if (result.success) {
                setSubmitted(true)
            } else {
                setError(result.message)
            }
        } catch (err: any) {
            setError('An unexpected error occurred')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
  return (
    <div id="book-event">
        {submitted ? (
            <p className="text-sm">Thank you for signing up!</p>
        ): (
            <>
                {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            id="email"
                            placeholder="Enter your email address"
                            required
                            disabled={loading}
                            />
                    </div>
                    <button type="submit" className="button-submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </>
        )}
    </div>
  )
}
export default BookEvent
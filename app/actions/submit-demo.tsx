"use server"

export async function submitDemoRequest(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const phone = formData.get("phone") as string
  const role = formData.get("role") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !company) {
    return {
      success: false,
      error: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    }
  }

  try {
    // Check if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      // Log the submission for now (in production, you'd want to store this in a database)
      console.log("[v0] Demo request received:", {
        name,
        email,
        company,
        phone,
        role,
        message,
        timestamp: new Date().toISOString(),
      })

      // Return success even without email sending for demo purposes
      return {
        success: true,
        message: "Demo request received. (Email sending not configured - add RESEND_API_KEY environment variable)",
      }
    }

    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Nuvae.ai <onboarding@resend.dev>", // Replace with your verified domain
        to: ["rajeev@nuvae.ai"], // Updated recipient email to rajeev@nuvae.ai
        subject: `New Demo Request from ${name} at ${company}`,
        html: `
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Role:</strong> ${role || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "No message provided"}</p>
          <hr />
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return {
      success: true,
      message: "Demo request sent successfully!",
    }
  } catch (error) {
    console.error("[v0] Error submitting demo request:", error)
    return {
      success: false,
      error: "Failed to submit request. Please try again or contact us directly.",
    }
  }
}

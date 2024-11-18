// app/api/chat/route.ts
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Get URL from query parameters
    const url = request.nextUrl.searchParams.get('url')
    
    if (!url) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      )
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    )
  }
}



// import { NextResponse } from 'next/server'

// const BACKEND_URL = process.env.BACKEND_URL || 'https://backend-webapp-pe-baeggaamd0btdmej.eastus-01.azurewebsites.net'

// export async function GET() {
//   try {
//     const response = await fetch(`${BACKEND_URL}/chat`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })

//     if (!response.ok) {
//       throw new Error(`API responded with status: ${response.status}`)
//     }

//     const data = await response.json()
//     return NextResponse.json(data)
//   } catch (error) {
//     console.error('API Error:', error)
//     return NextResponse.json(
//       { error: 'Failed to fetch data' },
//       { status: 500 }
//     )
//   }
// }

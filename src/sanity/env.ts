export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skSlqd1VjvvEtZOzq3s7eFaPihXWKSE1TvEZnPZ1GQ1M6zVwfsIOnjPCJ0e8KIGv1oYRZp0LnurVRjOitwxDArR0EjKdU5zDFyyFlQxdQ8z8YR0vYVqjkIUjoZKM6LhAByABqDTttkoVcAJdvRgP5AfGby5BptHP3H7RADsrK3h0oj2KqfER",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

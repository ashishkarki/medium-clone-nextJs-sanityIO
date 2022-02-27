import { createCurrentUserHook, createClient, ClientConfig } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// const pe = process.env

export const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2022-02-25',
  useCdn: process.env.NODE_ENV === 'production',
}

// setup client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

/**
* createImageUrlBuilder is a function that takes a single argument,
the image object from the Sanity database and returns that image's URL

* Following is a helper function for generating Image URLs with only the asset
reference data in your documents

* Reference: https://www.sanity.io/docs/image-url
*/
export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source)

/**
 * createCurrentUserHook is a function that takes no arguments and returns
 * a function that can be used to get the current user's data from the Sanity
 * database.
 *
 * Basically, helper function for using the current logged in user's account
 */
export const useCurrentUser = createCurrentUserHook(config)

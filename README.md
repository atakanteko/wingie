# Wingie Fake API and User Listing App

## Overview

This project consists of two main parts:

1. **Fake API**: A GraphQL API created with Apollo Server and deployed on Vercel.

2. **User Listing App**: A React application that consumes the fake API, lists users with Server-Side Rendering (SSR), allows users to be voted, and follows best practices. Sentry is integrated for error monitoring.

## Fake API

The fake API is built using Apollo Server and is deployed at [https://wingie-fake-api.vercel.app/graphql](https://wingie-fake-api.vercel.app/graphql).

# User Listing and Voting App

This application implements server-side rendering (SSR) using the latest version of Next.js. It allows users to view a list of users and vote for their favorites. The app also integrates Sentry for error monitoring.

### Application URL and Sentry Example Page

Application is deployed at [https://wingie.vercel.app](https://wingie.vercel.app)

Sentry example page is deployed at [hhttps://wingie.vercel.app/sentry-example-page](https://wingie.vercel.app/sentry-example-page)

## Features

- **Server-Side Rendering (SSR)**: Utilizes Next.js for efficient SSR, enhancing performance and SEO.
- **User Listing**: Displays a list of users fetched from a GraphQL API.
- **Voting**: Users can vote for their favorite users, increasing their vote count.
- **GraphQL Integration**: Uses Apollo Client to interact with a GraphQL server.
- **Error Monitoring**: Sentry is integrated to monitor and track errors in real-time.

## Technologies Used

- **Next.js**: Latest version for SSR and enhanced frontend performance.
- **React**: Frontend framework for building the user interface.
- **Apollo Client**: Fetches data from the GraphQL API.
- **GraphQL**: Query language for APIs used to fetch and mutate user data.
- **Sentry**: Integrated for proactive error monitoring and tracking.

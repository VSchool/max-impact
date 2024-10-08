const axios = require('axios')

// url is hard coded (add to env variable)
const getAccessToken = async () => {
  const options = {
    method: 'POST',
    url: `https://dev-gfgi6gytxfmnczvo.us.auth0.com/oauth/token`,
    headers: { 'content-type': 'application/json' },
    data: {
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: `https://dev-gfgi6gytxfmnczvo.us.auth0.com/api/v2/`,
      grant_type: 'client_credentials',
    },
  }

  try {
    const response = await axios(options)
    return response.data.access_token
  } catch (error) {
    console.error(
      'Error fetching access token:',
      error.response ? error.response.data : error.message
    )
    throw new Error('Failed to get access token')
  }
}

const updateUserMetadata = async (userId, app_metadata) => {
  // get token
  const token = await getAccessToken()

  try {
    const response = await axios.patch(
      `${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}`,
      {
        app_metadata: app_metadata,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return response.data
  } catch (e) {
    return e
  }
}

const queryAuthMetadata = async (key, value) => {
  // get access token
  const token = await getAccessToken()
  // define query with params
  const query = `app_metadata.${key}:${value}`
  try {
    const response = await axios.get(
      `${process.env.AUTH0_DOMAIN}/api/v2/users`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: query,
          search_engine: 'v3',
        },
      }
    )

    return response.data
  } catch (e) {
    return e
  }
}

module.exports = {
  updateUserMetadata,
  queryAuthMetadata,
}

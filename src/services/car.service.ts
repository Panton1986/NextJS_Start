const API_URL = 'https://api.api-ninjas.com/v1/cars?limit=10&make=audi&year=2022';

export const CarService = {
    const res = () => fetch(API_URL,
        {
          headers: {
            'X-Api-Key': '+cQk5Cc9nWhiWe9M3AoTQA==h3NWPbQnXtRZbLqc'
          }
        }
      )
      .then(response => response.json())
      .then(data => data)
}
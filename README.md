# Dino Facts API

Welcome to the Dino Facts API, where you can retrieve fascinating dinosaur fossil occurance information! This API provides various endpoints to fetch dinosaur fossil data based on different criteria.

- This project was built with Next.js, Supabase, tailwindcss, and Vercel. 

- All dino data was provided by Kaggle. Learn more about the dataset or download it here: https://www.kaggle.com/datasets/smruthiiii/dinosaur-dataset.

## Base URL

The base URL for accessing the API is: https://dino-facts.vercel.app/api/dinosaurs

## Usage

### Programmatically

You can programmatically access the API endpoints using HTTP requests (GET method). Here's how you can use each endpoint:

#### Fetch Dinosaurs by Name

Endpoint: `/name/{name}`

```bash
curl https://dino-facts.vercel.app/api/dinosaurs/name/tyrannosaurus
```

#### Fetch Dinosaurs by Diet

Endpoint: `/diet/{diet}`

```bash
curl https://dino-facts.vercel.app/api/dinosaurs/diet/carnivorous
```

#### Fetch Dinosaurs by Region

Endpoint: `/region/{region}`

```bash
curl https://dino-facts.vercel.app/api/dinosaurs/region/colorado
```

#### Fetch Dinosaurs by Class

Endpoint: `/class/{class}`

```bash
curl https://dino-facts.vercel.app/api/dinosaurs/class/terrestrial
```

#### Fetch Dinosaurs by Family

Endpoint: `/family/{family}`

```bash
curl https://dino-facts.vercel.app/api/dinosaurs/family/tyrannosauridae
```

#### Fetch Dinosaurs by Type

Endpoint: `/type/{type}`

```bash
curl https://dino-facts.vercel.app/api/dinosaurs/type/theropod
```

### Using the UI

1. You can access the UI in the [Dino Facts](https://dino-facts.vercel.app/) project.
   <img src="/readme/1.png />

3. Select the query type (Name, Diet, Region, Class, Family, Type) from the dropdown menu.

4. Enter your query in the input field.

5. Click on the "Search" button to retrieve results.

6. View the dinosaur facts displayed on the page.

### Examples

**Example 1: Fetching Dinosaurs by Name (Programmatic)**

```javascript
fetch('https://dino-facts.vercel.app/api/dinosaurs/name/tyrannosaurus')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching dinosaurs by name:', error));
```

**Example 2: Fetching Dinosaurs by Region (Programmatic)**

```javascript
fetch('https://dino-facts.vercel.app/api/dinosaurs/region/colorado')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching dinosaurs by region:', error));
```

## Troubleshooting

- Internal Server Error (500): If you encounter this error, check your query parameters and ensure they match the expected format.

- Not Found (404): This error occurs when no dinosaurs match the specified criteria. Verify your query and try again with different parameters.

## Support

For any issues or questions, please contact us at [mailto:hookerhillstudios.com](mailto:hookerhillstudios.com) with your query or issue.

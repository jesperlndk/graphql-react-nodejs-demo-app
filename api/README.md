# api
*Please see [the repo root folder](https://github.com/jesperlndk/react-graphql-nodejs-api-example-app)*.

**API for "Movie Explorer"**  
Node.js application to serve a REST API enabling you to query the dataset with powerful features like filtering, pagination, sorting and full-text searches.

The REST API is powered by [json-server](https://github.com/typicode/json-server).

## Demo

Live demo here: [https://api-pezcqxyjiw.now.sh](https://api-pezcqxyjiw.now.sh/)

## Installation

Prerequisites:
* Node v8.11.4 and later
* npm v5.6.0 and later

Run command `npm install` to install all needed dependencies.

## Usage

`npm start`  
This will start an Express server serving the REST API.  
URL for the server will be shown in the console. 

## API documentation

### Routes

Movies can be queried by using these two routes:

```
GET    /movies
GET    /movies/{slug}
```

### Filter

Any property of a movie can be used as filter for the query. Use `.` to access deep properties

```
GET /movies?title=Forrest Gump
GET /movies?slug=1994-forrest-gump
GET /movies?release_year=1994&production_company=Paramount Pictures
```

### Paginate

Use `_page` and optionally `_limit` to paginate returned data.

In the `Link` header you'll get `first`, `prev`, `next` and `last` links.


```
GET /movies?_page=7
GET /movies?_page=7&_limit=20
```

_10 items are returned by default_

### Sort

Add `_sort` and `_order` (ascending order by default)

```
GET /movies?_sort=popularity&_order=asc
```

For multiple fields, use the following format:

```
GET /movies?_sort=popularity,vote_count&_order=desc,asc
```

### Slice

Add `_start` and `_end` or `_limit` (an `X-Total-Count` header is included in the response)

```
GET /movies?_start=20&_end=30
```

_Works exactly as [Array.slice](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) (i.e. `_start` is inclusive and `_end` exclusive)_

### Operators

Add `_gte` or `_lte` for getting a range

```
GET /movies?popularity_gte=10&popularity_lte=20
```

Add `_ne` to exclude a value

```
GET /movies?id_ne=1
```

Add `_like` to filter (RegExp supported)

```
GET /movies?title_like=Forrest
```

### Full-text search

Add `q`

```
GET /movies?q=Holly
```

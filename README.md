# data-processing-js
Data Wrangling with JavaScript by Ashley Davis, notes and exercises.

*data analysis is working and inspecting data to support decision-making*

Acquire, store, retrieve -> Explore -> Clean -> Analyze -> Visualize

## core data representation (CDR)

design pattern for structuring flexible and reusable data pipelines

- stages of the I/O pipeline communicate through CDR
- modular with no hard dependencies on one another
- allows for rearrangement and clean scalability
- support multiple file formats by wiring together modular import and export code

## acquire store retrieve
*see acquire-store-retrieve/exercises and acquire-store-retrieve/toolkit for examples of importing and exporting different data formats*

## unusual data
*see unusual-data project for examples*

sometimes it is necessary to write custom parsers to interpret data in an unconventional format

RegEx testing tool http://regex101.com

unusual formats that may require custom parsers inlcude:
- unformatted text files
- the results of web scraping
- binary data
- BSON or Binary JSON

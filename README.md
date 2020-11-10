# HouseApportionment

The algorithm the U.S. Census Bureau uses to apportion the 435 representatives in the HOR. Representatives are apportioned using the decennial census data, and this implementation was verified using 2010 census data.

## `apportionNaive(pops[, repNum = 435])`

The simplistic approach to apportioning representatives:

- Give each state 1 representative
- Determine which state has the worst (highest) citizen:representative ratio
- Give 1 representative to that state
- Repeat until all representative seats are filled

## `apportion(pops[, repNum = 435])`

The actual approach to apportioning representatives:

- Give each state 1 representative
- Determine which state has the worst (highest) citizen:representative ratio, but get that ratio using...

  ![alt latex formula](https://latex.codecogs.com/gif.latex?%5Cfrac%7Bc%7D%7B%5Csqrt%7Br%20%5Ccdot%20%28r%20&plus;%201%29%7D%7D)
  
  ... which is the number of citizens the state currently has, divided by the geometric mean of the number of representatives the state has and the number of representatives the state has plus one
- Give 1 representative to that state
- Repeat until all representative seats are filled

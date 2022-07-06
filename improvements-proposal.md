# Part 2: Written Evaluation

## Questions:

1. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

2. Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

## Answers:

1. As we know, getting data from the API is an asynchronous task, so we have to handle asynchronous tasks in React using the useEffect hook. Also, in this particular application, I would use the useState hook, which will store all the data from the API. Other considerations I would make is the size of the data we are retrieving. If it's a large amount of data, I think it's a better idea to only get as many posts as we need for the current page in order to improve performance. Each time the user clicks on the buttons on the page or updates the number of posts on the page, new data will be retrieved. Also I would add a Loader component which will be rendered every time the user requests new posts to improve the user experience.

2. To be honest, I've never used the nanoid before. However, I did some research on this. The official documentation says that "There’s no correct way to use Nano ID for React key prop since it should be consistent among renders." There are alternatives like UUID or React's new useId hook that we can use instead. Although the most efficient way to generate keys in a list is to get unique ids from our data.

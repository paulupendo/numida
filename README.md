# Numida React Native App 👋

## Get started

1. Install dependencies

```bash {"id":"01J66J4HC1MRAFY5BMW4CP3WDS"}
npm install
```

2. Start the app

```bash {"id":"01J66J4HC38XHGABXVHSCTP1FJ"}
 npm run start
```


### Application Development Approach

#### 1. **React Native Structure**:
   - **Component-Driven Development**: The application was built with a strong focus on reusable and modular components. Each UI element, such as buttons, input fields, and cards, was encapsulated within its own component, making it easy to manage, reuse, and test.
   - **Styled Components**: We leveraged `styled-components` for styling, which allowed us to maintain a consistent design system and easily apply dynamic styles based on props.

#### 2. **Input Validation**:
   - **Real-Time Validation**: Input validation was handled on the fly within the `onChangeText` event, providing immediate feedback to users. This approach improves user experience by catching errors as they happen, rather than waiting until form submission.
   - **Centralized Validation Logic**: All validation logic was abstracted into utility functions, ensuring that it’s reusable and easy to maintain. This made the form validation both scalable and consistent across the application.

#### 3. **State Management with Redux**:
   - **Redux Toolkit**: For managing global state, Redux Toolkit was employed, simplifying the process of creating slices and handling async operations. This structure allowed for clear separation of concerns and made the app’s state management predictable and maintainable.

#### 4. **GraphQL Integration**:
   - **Apollo Client**: Apollo Client was integrated for handling GraphQL queries and mutations, enabling efficient data fetching and caching. By abstracting GraphQL queries into `.graphql` files and tying them into Redux actions, we maintained a clean and organized structure.

#### 5. **Unit Testing**:
   - **Testing with @testing-library/react-native**: We implemented unit tests for all key components using `@testing-library/react-native`. These tests ensure that components render correctly, handle user interactions as expected, and manage state appropriately.
   - **Focus on Key Scenarios**: Tests were written to cover the main scenarios, such as rendering components with different props, handling form input, showing/hiding loaders, and managing navigation. This comprehensive test coverage gives confidence that the app will behave correctly under various conditions.

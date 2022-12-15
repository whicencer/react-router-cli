# React router CLI

## What is this library for
**react-router-cli** - is a library for auto-generating react routing
## Get started
1. **Install package globally**  
`npm install --global react-router-cli`
2. **Initialize React app**  
`npx create-react-app react-app`
3. **Install react-router-dom in your React app**  
`npm i react-router-dom`
4. **Run an CLI**  
`npx react-router-cli`  
5. **Choose option**
```
? What would you like to generate? (Use arrow keys)
❯ Base routing
  Public/Private routing
```

### Generated files
#### Base routing:
- `routing`
    - `router-provider.tsx`
    - `router-typings.ts`
    - `routes.ts`
    - `routing.tsx`
#### Public/Private routing (routing with private routes):
- `routing`
    - `lib`
        - `PrivateRoutes.tsx`
        - `PublicRoutes.tsx`
    - `router-provider.tsx`
    - `router-typings.ts`
    - `routes.ts`
    - `routing.tsx`

### How to use
*After generating base routing you need to do the following:*  
***Base routing***  
- Define all routes in `routes.ts`
- Go to `App` and insert `<Routing />` component which was imported from `routing.tsx`  

***Public/Private routing*** 
- Same things as in ***Base routing***
- In `lib` directory specify condition on which private/public routes would work (for both components)  
**By default it's just variable `isAuth` that imitates that the user is logged in**  
- In `PrivateRoutes` in `<Navigate to="" />` specify the route to which user will be redirected if the user is not logged in
- In `PublicRoutes` in `<Navigate to="" />` specify the route to which the user will be redirected if the user is logged in
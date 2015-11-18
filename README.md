# controller
Typescript Controller Experiment

# Decorators
## @Controller
Set a base route for all controller methods.

```typescript
@Controller('/some-path')
class SomeController {
    ...
}
```

## @Middleware
Middleware-decorators are usable for classes and methods. Any expressjs middleware is possible.

```typescript
...
@Middleware([function(req, res, next){
    ...
}])
class SomeController {
    ...
    @Middleware([function(req, res, next){
        ...
    }])
    someMethod(req, res, next)
    {
        ...
    }
}
```

## Methods
The route path will be appended to the base route. Implemented methods are fully express compatible.

### @Get
Add a GET method. 

```typescript
...
class SomeController {
    ...
    @Get('/some-path')
    someMethod('req, res, next)
    {
        ...
    }
}
```

### @Post
Add a POST method.

```typescript
...
class SomeController {
    ...
    @Post('/some-path')
    someMethod('req, res, next)
    {
        ...
    }
}
```

### @Put
Add a PUT method.

```typescript
...
class SomeController {
    ...
    @Put('/some-path')
    someMethod('req, res, next)
    {
        ...
    }
}
```

### @Delete
Add a DELETE method.

```typescript
...
class SomeController {
    ...
    @Delete('/some-path')
    someMethod('req, res, next)
    {
        ...
    }
}
```

### @Patch
Add a PATCH method.

```typescript
...
class SomeController {
    ...
    @Patch('/some-path')
    someMethod('req, res, next)
    {
        ...
    }
}
```

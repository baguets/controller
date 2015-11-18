# controller
Typescript Controller Experiment

# Decorators
## @Controller

    @Controller('/some-path')
    class SomeController {
        ...
    }

## @Middleware
Any expressjs middleware is possible

    ...
    @Middleware([function(req, res, next){
        ...
    }])
    class SomeController {
        ...
        @Middleware([function(req, res, next){}])
        someMethod(req, res, next)
        {
            ...
        }
    }

## @Get

    ...
    class SomeController {
        ...
        @Get('/some-path')
        someMethod('req, res, next)
        {
            ...
        }
    }

## @Post

    ...
    class SomeController {
        ...
        @Post('/some-path')
        someMethod('req, res, next)
        {
            ...
        }
    }

## @Put

    ...
    class SomeController {
        ...
        @Put('/some-path')
        someMethod('req, res, next)
        {
            ...
        }
    }

## @Delete

    ...
    class SomeController {
        ...
        @Delete('/some-path')
        someMethod('req, res, next)
        {
            ...
        }
    }

## @Patch

    ...
    class SomeController {
        ...
        @Patch('/some-path')
        someMethod('req, res, next)
        {
            ...
        }
    }



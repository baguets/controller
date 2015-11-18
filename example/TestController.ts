import {Request, Response} from 'express';
import {Controller, Middleware, Get, Post} from '../src/Annotations';

@Controller('/test')
@Middleware([function(request: Request, response: Response, next: Function){
    console.log('Some middleware for all controller methods');
    next();
}])
export class TestController {

    @Get('/')
    @Get('/test')
    @Post('/foo')
    @Middleware([function(request: Request, response: Response, next: Function){
        console.log('Some middleware only for that method');
        next();
    }])
    show(request: Request, response: Response) {

        response.send('TEST');
    }
}
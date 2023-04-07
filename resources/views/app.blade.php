<!DOCTYPE html >
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="light-style customizer-hide">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" value="{{ csrf_token() }}"/>
        <title></title>
        <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
        />
        {{-- <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet"/> --}}
        <link href="css/core.css" type="text/css" rel="stylesheet"/>
        <link href="css/theme-default.css" type="text/css" rel="stylesheet"/>
        <link href="css/demo.css" type="text/css" rel="stylesheet"/>
        <link href="css/pages/page-auth.css" type="text/css" rel="stylesheet"/>
        
    </head>
    <body>
        <div id="app">
        </div>
        <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
    </body>
</html>
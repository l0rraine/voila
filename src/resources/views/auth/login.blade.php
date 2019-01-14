@php
    $config = [
        'dashboard_url_prefix'=> config('ddvue.adminpanel.url_prefix'),
    ];
@endphp
        <!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('ddvue.adminpanel.dashboard_name') }}</title>

    <!-- Fonts -->
    {{--<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">--}}
    {{--<link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">--}}
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
</head>
<body>
<script>window.config = @json($config);</script>
<div id="app" style="width:500px;margin:0 auto;border: 1px solid #ebebeb;border-radius: 3px;transition: .2s;padding:20px;height:300px;">
    <ddv-login type="{{ config('ddvue.adminpanel.auth.type') }}"></ddv-login>
</div>


{{-- Polyfill JS features via polyfill.io --}}
{{--<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features={{ implode(',', $polyfills) }}"></script>--}}


<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendor.js') }}"></script>
<script src="{{ mix('js/adminpanel.js') }}"></script>
<script src="{{ mix('js/crud.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>

@extends('layouts.base-root')
@section('scripts')
    <script  nonce="{{ $cspNonce }}" src="{{ asset('dist/app.js') }}"></script>
@stop

<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
use Inertia\Inertia;

Route::get('login', function () {
    return Inertia::render('Auth/Login');
});

Route:: get("/", function () {
    return Inertia::render('Dashboard/Index');
});

Route:: get("/dashboard", function () {
    return Inertia::render('Dashboard/Index');
});
Route:: get("/financial-payments", function () {
    return Inertia::render('FinancialPayments/Index');
});
Route:: get("/financial-payments/{id}", function () {
    return Inertia::render('FinancialPayments/Details');
});

Route:: get("/expenses", function () {
    return Inertia::render('Expenses/Index');
});

Route:: get("/student-wallets", function () {
    return Inertia::render('StudentWallets/Index');
});

Route:: get("/employees", function () {
    return Inertia::render('Employees/Index');
});

Route:: get("/payment-account", function () {
    return Inertia::render('PaymentAccount/Index');
});


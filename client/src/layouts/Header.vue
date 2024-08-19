<template>
    <div class="header border-bottom">
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">
                <a class="navbar-brand p-0" href="/">CanwsTech</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="px-4 nav-link text-white bg-danger rounded text-capitalize me-2"
                            to="/application-submit">Submit Application</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="px-4 nav-link text-white bg-danger rounded text-capitalize me-2"
                            to="/">Applications List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="px-4 nav-link text-white bg-danger rounded text-capitalize"
                            to="/loan-amount">Average Loan Amount</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
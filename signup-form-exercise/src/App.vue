<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="">First name</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Last name</label>
                        <input type="text" class="form-control">
                    </div>
                     <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" class="form-control">
                    </div>
                     <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" class="form-control">
                    </div>
                     <div class="form-group">
                        <label for="">
                            <input type="radio" value="Yes">Yes
                        </label>
                        <label for="">
                            <input type="radio" value="No">No
                        </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: </p>
                        <p>Mail: </p>
                        <p>Password: </p>
                        <p>Store in Database?: </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
</style>

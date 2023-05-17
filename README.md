[![Mocha Tests](https://github.com/facucz/api-tests-fw/actions/workflows/mocha-tests.yml/badge.svg?branch=master)](https://github.com/facucz/api-tests-fw/actions/workflows/mocha-tests.yml)

# API Test Repository

This repository contains API tests written in JavaSCript using Mocha as test runner. The tests are designed to verify the functionality and behavior of your API endpoints.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the repository directory:

    ```shell
    cd api-tests-fw
    ```

3. Install the dependencies:

    ```shell
    npm install
    ```

### Running Tests

1. To run the tests, use the following command:

    ```shell
    npm test
    ```

This command will execute the Mocha tests and display the test results in the console.

### Test Report

1. To generate a test report while running the tests, use the following command:

    ```shell
    npm run test-report
    ```

This command will execute the tests and generate a detailed test report, which can be found in the specified location (./output). The report provides a summary of test results, including passed, failed, and skipped tests, along with any additional details.

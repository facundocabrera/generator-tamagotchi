#
# Iterate over the tests report and register the information inside the tests tab
#

$tests = Get-Content tests.json | Out-String | ConvertFrom-Json

foreach ($test in $tests.failure) {
    Invoke-Expression -Command $("Add-AppveyorTest """ + $test.fullTitle + """ -Outcome Passed -Duration " + $test.duration)
}

foreach ($test in $tests.passes) {
    Invoke-Expression -Command $("Add-AppveyorTest """ + $test.fullTitle + """ -Outcome Passed -Duration " + $test.duration)
}

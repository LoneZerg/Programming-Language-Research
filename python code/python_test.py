'''
this file takes code and determines its runtime for
1000 runs, and stores the results into a excel file.
'''

import timeit
import pandas as pd
from python_experiments import *

# Define the code snippet whose runtime you want to measure.
def wrapper():
    mixed_integer_arithmetic()

# Number of times to repeat the measurement
num_measurements = 1000

# Measure the runtime
times = [timeit.timeit(wrapper, number=1) for _ in range(num_measurements)]

# Convert the results into a pandas DataFrame
df = pd.DataFrame(times, columns=['Runtime'])

# Write the DataFrame to an Excel file
excel_file = 'mixed_integer_arithmetic.xlsx'
df.to_excel(excel_file, index=False)

print(f'Done. The measurements have been saved to {excel_file}')

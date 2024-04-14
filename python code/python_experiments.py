'''
This file holds all the experiments in a function format to easily call to
the parent python module that measures runtime for each function
'''
# float_assignments.py
def assign_floats_explicitly():
    f1 = float(1.1)
    f2 = float(1.2)
    f3 = float(1.3)
    f4 = float(1.4)
    f5 = float(1.5)
    f6 = float(1.6)
    f7 = float(1.7)
    f8 = float(1.8)
    f9 = float(1.9)
    f10 = float(1.0)

def assign_floats_implicitly():
    f1 = 1.1
    f2 = 1.2
    f3 = 1.3
    f4 = 1.4
    f5 = 1.5
    f6 = 1.6
    f7 = 1.7
    f8 = 1.8
    f9 = 1.9
    f10 = 1.0

def explicit_float_arithmetic():
    f1 = float(1)
    f2 = float(2)
    f1 = f1 + f2

def mixed_float_arithmetic():
    f1 = 1.0
    f2 = float(2)
    f1 = f1 + f2

def explicit_integer_arithmetic():
    i1 = int(1)
    i2 = int(2)
    i1 = i1 + i2

def mixed_integer_arithmetic():
    i1 = 1
    i2 = int(2)
    i1 = i1 + i2

def explciit_likewise_mixed_arithmetic():
    f1 = float(2.1)
    f2 = float(3.2)
    i1 = int(1)
    i2 = int(2)
    f1 = f1 + f2
    i1 = i1 + i2
    f1 = f1 + i1
    
def explicit_mixed_likewise_arithmetic():
    f1 = float(2.1)
    f2 = float(3.2)
    i1 = int(1)
    i2 = int(2)
    f1 = f1 + i1
    f2 = f2 + i2
    f1 = f1 + f2



def countingValleys(steps, path):
    numerical_array = []
    count = 0
    n_valleys = 0
    
    for item in path:
        if item == 'D':
            numerical_array.append(-1)
        else:
            numerical_array.append(1)
            
    for item in numerical_array:
        count = item + count
        if count == 0 and item == 1:
            n_valleys = n_valleys + 1
            
    return n_valleys
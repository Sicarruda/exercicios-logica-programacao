def jumpingOnClouds(c):
    jumps = 0
    
    skip_next_cloud = False
    for index in range(len(c)):

        if skip_next_cloud:
            skip_next_cloud = False
            continue

        if c[index] == 0:

            if index < (len(c) - 2) and c[index + 2] == 0:
                jumps = jumps + 1
                skip_next_cloud = True
            elif index < len(c) - 1 and c[index + 1] == 0:
                jumps = jumps + 1
            
    return jumps
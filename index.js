def make_solution(p_random, p_deter):                       
    deter_flag = 0
    random_flag = 0
    if p_random >= random.random():
            p_random-=0.01                                  # баланс приоритета
            p_deter+=0.01
            random_flag = 1
    if p_deter >= random.random():
            p_deter-=0.01                                   # баланс приоритета
            p_random+=0.01
            deter_flag = 1
    if random_flag == 1 and deter_flag == 0:
        return(p_random, p_deter, 1)
    elif deter_flag == 1 and random_flag == 0:
        return(p_random, p_deter, -1)
    else:
        return (p_random, p_deter,0)

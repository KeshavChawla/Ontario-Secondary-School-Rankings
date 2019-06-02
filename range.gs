function ranPercent (inp, min_val, max_val){

    var percentage = ((inp - min_val) * 100) / (max_val - min_val);

    if (percentage > 100) {

        }

    else {
            percentage = 100;
        }

    }

    else if (percentage < 0)
    {
        percentage = 0;
    }

    return (percentage/100);
}
Utilities.sleep(1000)

function payee(amount) {
    const monthlyTaxablePay = amount;
    if (monthlyTaxablePay <= 24000) {
        return `payee is ${monthlyTaxablePay * 0.1}` 

    }else if (monthlyTaxablePay > 24000 && monthlyTaxablePay <= 32333) {
        return `payee is ${monthlyTaxablePay * 0.25}` 

    }else if (monthlyTaxablePay > 32333 && monthlyTaxablePay <= 500000) {
        return `payee is ${monthlyTaxablePay * 0.3}` 

    }else if (monthlyTaxablePay > 500000 && monthlyTaxablePay <= 800000) {
        return `payee is ${monthlyTaxablePay * 0.325}` 

    }else if (monthlyTaxablePay > 800000) {
        return `payee is ${monthlyTaxablePay * 0.35}` 

    }
}
console.log(payee(500000));

//NHIF CALCULATOR

function nhif(nhif_amount) {
    const grossPay = nhif_amount;
    if (grossPay <= 5999) {
        return "nhif_deduction  is " + 150 

    }else if (grossPay > 5999 && grossPay <= 7999) {
        return "nhif_deduction  is " + 300 

    }else if (grossPay > 799 && grossPay <= 11999) {
        return "nhif_deduction  is " + 400 

    }else if (grossPay > 11999 && grossPay <= 14999) {
        return "nhif_deduction  is " + 500 

    }else if (grossPay > 14999 && grossPay <= 19999) {
            return "nhif_deduction  is " + 600 
    
        }else if (grossPay > 19999 && grossPay <= 24999) {
            return "nhif_deduction  is " + 750 
    
        }else if (grossPay > 24999 && grossPay <= 29999) {
            return "nhif_deduction  is " + 850 
    
        }else if (grossPay > 29999 && grossPay <= 34999) {
            return "nhif_deduction  is " + 900 
    
        }else if (grossPay > 34999 && grossPay <= 39999) {
            return "nhif_deduction  is " + 950 
    
        }else if (grossPay > 39999 && grossPay <= 44999) {
            return "nhif_deduction  is " + 100 
    
        }else if (grossPay > 44999 && grossPay <= 49999) {
                return "nhif_deduction  is " + 110 
        
            }else if (grossPay > 49999 && grossPay <= 59999) {
                return "nhif_deduction  is " + 120 
        
            }else if (grossPay > 59999 && grossPay <= 69999) {
                return "nhif_deduction  is " + 130 
        
            }else if (grossPay > 69999 && grossPay <= 79999) {
                return "nhif_deduction  is " + 140 
        
            }else if (grossPay > 79999 && grossPay <= 89999) {
                return "nhif_deduction  is " + 150 
        
            }else if (grossPay > 89999 && grossPay <= 99999) {
                    return "nhif_deduction  is " + 160 
        
            
                }else if (grossPay >= 100000) {
                    return "nhif_deduction  is " + 170 
            
                }  
        
}
console.log(nhif(120000));


function nssf(nssf_amount) {
    const pensionablePay = nssf_amount;
    if (pensionablePay <= 7000) {
        return `pensionable pay  is ${pensionablePay * 0.12}` 

    }else if (pensionablePay > 7000 && pensionablePay <= 36000) {
        return `pensionable pay is  ${pensionablePay * 0.12}` 
    }
}
console.log(nssf(29000))

function housingLevy(housingLevyAmount) {
    const basicSalary = housingLevyAmount;
    return `housing levy deduction is ${basicSalary * 0.03}`
}
console.log(housingLevy(100000))


    




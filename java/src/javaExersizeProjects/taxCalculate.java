package javaExersizeProjects;

import java.util.Scanner;

public class taxCalculate {
    public static void main(String[] args) {
        double price,tax_ratio=0.18,with_tax_price,calculated_tax_price;
        Scanner input=new Scanner(System.in);
        System.out.print("Write the Price: ");
        price= input.nextDouble();
        with_tax_price=price*tax_ratio;
        calculated_tax_price=with_tax_price+price;

        System.out.println("First Price: "+price);
        System.out.println("Tax Ratio:" +tax_ratio);
        System.out.println("Tax Price = " +with_tax_price );
        System.out.println("Price With Tax  = " +calculated_tax_price );

    }
}

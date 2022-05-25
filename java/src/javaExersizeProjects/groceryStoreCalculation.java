package javaExersizeProjects;

import java.util.Scanner;

public class groceryStoreCalculation {
    public static void main(String[] args) {

        double pearPrice=2.14,eggplantPrice=5.00,bananaPrice=0.95,tomatoPrice=1.11,applePrice=3.67;

        double pear1,eggplant1,banana1,tomato1,apple1;

        double pearTBuyingPrice;
        double appleTBuyingPrice;
        double tomatoTBuyingPrice;
        double bananaTBuyingPrice;
        double eggplantTBuyingPrice;

        double totalGroceryStorePrice;

        Scanner scannedKG = new Scanner(System.in);

        System.out.println("Please enter pear kilogram amount : ");
        pear1=scannedKG.nextDouble();

        System.out.println("Please enter apple kilogram amount : ");
        apple1=scannedKG.nextDouble();

        System.out.println("Please enter tomato kilogram amount : ");
        tomato1=scannedKG.nextDouble();

        System.out.println("Please enter banana kilogram amount : ");
        banana1=scannedKG.nextDouble();

        System.out.println("Please enter eggplant kilogram amount : ");
        eggplant1=scannedKG.nextDouble();

        pearTBuyingPrice=pearPrice*pear1;
        appleTBuyingPrice=applePrice*apple1;
        tomatoTBuyingPrice=tomatoPrice*tomato1;
        bananaTBuyingPrice=bananaPrice*banana1;
        eggplantTBuyingPrice=eggplantPrice*eggplant1;

        System.out.println("pearT = " + pearTBuyingPrice);
        System.out.println("appleT = " + appleTBuyingPrice);
        System.out.println("tomatoT = " + tomatoTBuyingPrice);
        System.out.println("bananaT = " + bananaTBuyingPrice);
        System.out.println("eggplantT = " + eggplantTBuyingPrice);

        totalGroceryStorePrice=pearTBuyingPrice+appleTBuyingPrice+tomatoTBuyingPrice+bananaTBuyingPrice+eggplantTBuyingPrice;
        System.out.println("Total price = " + totalGroceryStorePrice);

    }
}

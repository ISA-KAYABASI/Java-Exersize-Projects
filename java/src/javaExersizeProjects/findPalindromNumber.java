package javaExersizeProjects;

public class findPalindromNumber {

    static boolean isPalindromNumber(int number){
        int temp = number, reverseNumber = 0, lastNumber, notlastNumber, lastNumber2, notlastNumber2, finalNumber;

         while (temp != 0){
             System.out.println("====");
             System.out.println("temp = " + temp);
             lastNumber = temp % 10;
             notlastNumber = temp / 10;
             System.out.println("lastNumber = " + lastNumber);
             System.out.println("notlastNumber = " + notlastNumber);
             
             lastNumber2 = notlastNumber % 10;
             notlastNumber2 = notlastNumber / 10;
             System.out.println("lastNumber2 = " + lastNumber2);
             System.out.println("notlastNumber = " + notlastNumber2);
             finalNumber = (((lastNumber * 10)+ lastNumber2)*10)+notlastNumber2;
             System.out.println("finalNumber = " + finalNumber);
         }

        return true;
    }


    public static void main(String[] args) {
        isPalindromNumber(247);
    }
}

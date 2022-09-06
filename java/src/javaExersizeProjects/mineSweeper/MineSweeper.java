package javaExersizeProjects.mineSweeper;

import java.util.Random;
import java.util.Scanner;

public class MineSweeper {

    static int numberOfMine;
    static int rowNumber;
    static int columnNumber;
    static int chosenRow;
    static int chosenColumn;
    static int nextToMines = 0;
    static int gameWin = 0;
    static boolean isContinue = true;
    static String[][] mapWithMine;
    static String[][] mapWithoutMine;

    // kullanıcıdan harita bilgilerini alma ve haritayı oluşturma
    static void createMap(){
        System.out.println(" WELCOME TO MINESWEEPER GAME ! \n");
        Scanner scan = new Scanner(System.in);
        System.out.println("Satır Sayısını Giriniz");
        rowNumber = scan.nextInt();
        System.out.println("Sütun Sayısını Giriniz");
        columnNumber = scan.nextInt();

        // Mayın Sayısını dinamik olarak haritanın 1/4 oranında belirledik
        numberOfMine = (rowNumber * columnNumber)/4;
        System.out.println("numberOfMine = " + numberOfMine);

        mapWithMine = new String[rowNumber][columnNumber];
        mapWithoutMine = new String[rowNumber][columnNumber];

        for (int i = 0; i < mapWithMine.length; i++) {
            for (int j = 0; j < mapWithMine[i].length; j++) {
                if(i< mapWithMine.length && j < mapWithMine[i].length){
                    mapWithMine[i][j] = " - ";
                    mapWithoutMine[i][j] = " - ";
                }
            }
        }

        randomMine();
        for (String[] row : mapWithMine){
            for (String col : row){
                System.out.print(col);
            }
            System.out.println();
        }
        System.out.println("**************************");
        for (String[] row : mapWithoutMine){
            for (String col : row){
                System.out.print(col);
            }
            System.out.println();
        }

    }

    // haritadada ki alanın 1/4 ü oranında mayını, rastgele konumlandırdık
    static void randomMine(){
        int randomRow;
        int randomColumn;
        Random rand = new Random();
        for(int i = 1; i <= numberOfMine; i++) {
            randomRow= rand.nextInt(rowNumber);
            randomColumn = rand.nextInt(columnNumber);

            if(mapWithMine[randomRow][randomColumn]==" - ") {
                mapWithMine[randomRow][randomColumn] = " * ";
            }else{
                i--;
            }
        }
    }

    // kullanıcıdan harita üzerinden bir konum alıyoruz
    static void choseField(){

        int tryNumber = 0;
        Scanner scanner = new Scanner(System.in);

        if(((rowNumber * columnNumber) - numberOfMine) == gameWin){
            System.out.println("You WIN !!");
            isContinue = false;

        }else{
            do {
                if(tryNumber>=1) {
                    System.out.println("Please enter a valid area number ! ");
                }

                System.out.println("Please enter a Row Number ");
                chosenRow = scanner.nextInt();

                System.out.println("Please enter a Column Number ");
                chosenColumn = scanner.nextInt();

                tryNumber++;
            }while(chosenColumn>columnNumber || chosenRow>rowNumber);
        }

    }

    // Seçilen alanda mayın var mı yok mu ?
    static void checkMine(){
//        isContinue = true;
        while(isContinue){
            if(mapWithMine[chosenRow][chosenColumn] != " * "){
                System.out.println("---no mine is here---");
                gameWin++;
                nearMineNumber();
                mapWithoutMine[chosenRow][chosenColumn] = (" "+nextToMines+" ");
                for (String[] row : mapWithoutMine){
                    for (String col : row){
                        System.out.print(col);
                    }
                    System.out.println();
                }

                choseField();

            }else if(mapWithMine[chosenRow][chosenColumn]== " * ")  {
                isContinue = false;
                System.out.println("GAME OVER !");
                for (String[] row : mapWithMine){
                    for (String col : row){
                        System.out.print(col);
                    }
                    System.out.println();
                }

            }else{
                System.out.println("Good luck !");
            }
        }
    }

    //Etraftaki mayınların sayısı
    static int nearMineNumber(){
        nextToMines = 0;

        // seçilen alan kenarlarda değilse çalışır
        if(     chosenRow != 0 && chosenColumn !=0 &&
                chosenRow != rowNumber-1 &&
                chosenColumn !=columnNumber-1){

            for(int i = chosenRow-1; i<= chosenRow+1; i++){
                for(int j = chosenColumn-1; j <= chosenColumn+1; j++){
                    if(mapWithMine[i][j]== " * "){
                        nextToMines++;
                    }
                }
            }

        }

        //***********Köşeler************
        // [0][0] (solüst köşe)
        if(chosenRow == 0 && chosenColumn == 0){
            for(int i = chosenRow; i<= chosenRow+1; i++){
                for(int j = chosenColumn; j <= chosenColumn+1; j++){
                    if(mapWithMine[i][j]== " * "){
                        nextToMines++;
                    }
                }
            }
        }

        // [0][columnNumber] (sağüst köşe)
        if(chosenRow == 0 && chosenColumn == columnNumber-1){
            for(int i = chosenRow; i<= chosenRow+1; i++){

                for(int j = chosenColumn-1; j <= chosenColumn; j++){
                    if(mapWithMine[i][j] == " * "){
                        nextToMines++;
                    }
                }
            }

        }

        // [rowNumber][0] (solalt köşe)
        if(chosenRow == rowNumber-1 && chosenColumn == 0){
            for(int i = chosenRow-1; i<= chosenRow; i++){
                for(int j = chosenColumn; j <= chosenColumn+1; j++){
                    if(mapWithMine[i][j]== " * "){
                        nextToMines++;
                    }
                }
            }

        }

        // [rowNumber][columnNumber] (sağalt köşe)
        if(chosenRow == rowNumber-1 && chosenColumn == columnNumber-1){

            for(int i = chosenRow-1; i<= chosenRow; i++){
                for(int j = chosenColumn-1; j <= chosenColumn; j++){
                    if(mapWithMine[i][j]== " * "){
                        nextToMines++;
                    }
                }
            }

        }

        //********Kenarlar ***********

        //[0][n]  (Üst kenar)
        if(chosenRow == 0 && chosenColumn !=0 && chosenColumn != columnNumber-1 ){

            for(int i = chosenRow; i<= chosenRow+1; i++){
                for(int j = chosenColumn-1; j <= chosenColumn+1; j++){
                    if(mapWithMine[i][j]== " * "){
                        nextToMines++;
                    }
                }
            }

        }

        //[n][rowNumber] (AltKenar)
        if( chosenRow == rowNumber-1 &&
                chosenColumn!=0 &&
                chosenColumn !=columnNumber-1){

            for(int i = chosenRow-1; i<= chosenRow; i++){
                for(int j = chosenColumn-1; j <= chosenColumn+1; j++){
                    if(mapWithMine[i][j]== " * "){
                        nextToMines++;
                    }
                }
            }

        }

        //[n][columnNumber] (SağKenar)
        if(     chosenRow != 0 &&
                chosenRow != rowNumber-1 &&
                chosenColumn == columnNumber-1){

            for(int i = chosenRow-1; i<= chosenRow+1; i++){
                for(int j = chosenColumn-1; j <= chosenColumn; j++){
                    if(mapWithMine[i][j]== " * "){
                        nextToMines++;
                    }
                }
            }

        }

        //[n][0]  (SolKenar)
        if(     chosenRow != 0 && chosenColumn ==0 &&
                chosenRow != rowNumber-1){

            for(int i = chosenRow-1; i<= chosenRow+1; i++){
                for(int j = chosenColumn; j <= chosenColumn+1; j++){
                    if(mapWithMine[i][j]== " * "){
                        nextToMines++;
                    }
                }
            }

        }

        return nextToMines;
    }

}





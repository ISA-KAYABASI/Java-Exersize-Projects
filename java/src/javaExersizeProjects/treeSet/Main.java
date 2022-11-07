package javaExersizeProjects.treeSet;

import java.util.Comparator;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        TreeSet<Book> book = new TreeSet<>();

        Book book1 = new Book("Kasik Yurek ",220,"Ahmet Yilmaz ",1995);
        Book book2 = new Book("Cesur Yurek ",230,"Kelly Tutson ",1945);
        Book book3 = new Book("Aman Tanrim ",240,"Jessi Barton ",1955);
        Book book4 = new Book("Gezgin      ",250,"Halit Sacip  ",1895);
        Book book5 = new Book("Seker Kazani",260,"Jonny Larmoda",1935);

        book.add(book1);
        book.add(book2);
        book.add(book3);
        book.add(book4);
        book.add(book5);

        System.out.println("Sort By Name : ");
        for (Book bookName:book){
            System.out.println(" Book Name : "+bookName.getName()
            +" Book Page : "+bookName.getPages()
            +" Book Author : "+bookName.getAuthor()
            +" Book Publish Date : "+bookName.getPublicationDate());
        }

        TreeSet<Book> books=new TreeSet<>(new Comparator<Book>() {
            @Override
            public int compare(Book o1, Book o2) {
                return o1.getPages()-o2.getPages();
            }
        });

        books.add(book1);
        books.add(book2);
        books.add(book3);
        books.add(book4);

        System.out.println("**************");
        System.out.println("Books sorted by number of pages");
        for (Book bookPage:books) {
            System.out.println("Book Name : " + bookPage.getName()+
                    "Book Page : " + bookPage.getPages()+
                    "Book Author : " + bookPage.getAuthor()+
                    "Book Publish Date : " + bookPage.getPublicationDate());
        }
        System.out.println("-----------------------");





    }
}

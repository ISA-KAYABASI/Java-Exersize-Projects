package game;

import javax.swing.*;
import java.awt.*;

public class GameScreen extends JFrame {

    public GameScreen(String title) throws HeadlessException {
        super(title);
    }

    public static void main(String[] args) {

        GameScreen screen = new GameScreen("Space Game");

        screen.setResizable(false);
        screen.setFocusable(false);

        screen.setSize(800,600);

        screen.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        Game game= new Game();

        game.requestFocus();

        game.addKeyListener(game);

        game.setFocusable(true);
        game.setFocusTraversalKeysEnabled(false);

        screen.add(game);

        screen.setVisible(true);
    }
}

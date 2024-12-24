import pygame
import os
from random import randint

# Inicjalizacja Pygame
pygame.init()
window = pygame.display.set_mode((1280, 720))


class Player:
    def __init__(self):
        # Współrzędne startowe gracza
        self.x_cord = 0
        self.y_cord = 0
        
        # Wczytanie obrazu gracza
        self.image = pygame.image.load(os.path.join(os.path.dirname(__file__), "player2.png"))
        
        # Wymiary gracza
        self.width = self.image.get_width()
        self.height = self.image.get_height()
        
        # Prędkość ruchu gracza
        self.speed = 4
        
        # Hitbox gracza
        self.hitbox = pygame.Rect(self.x_cord, self.y_cord, self.width, self.height)

    def tick(self, keys):
        # Ruch gracza
        if keys[pygame.K_w]:
            self.y_cord -= self.speed
        if keys[pygame.K_a]:
            self.x_cord -= self.speed
        if keys[pygame.K_s]:
            self.y_cord += self.speed
        if keys[pygame.K_d]:
            self.x_cord += self.speed

        # Aktualizacja hitboxa
        self.hitbox = pygame.Rect(self.x_cord, self.y_cord, self.width, self.height)

    def draw(self):
        # Rysowanie gracza
        window.blit(self.image, (self.x_cord, self.y_cord))


class Cash:
    def __init__(self):
        # Losowa pozycja banknotu
        self.x_cord = randint(0, 1280)
        self.y_cord = randint(0, 720)
        
        # Wczytanie obrazu banknotu
        self.image = pygame.image.load(os.path.join(os.path.dirname(__file__), "banknot.png"))
        
        # Wymiary banknotu
        self.width = self.image.get_width()
        self.height = self.image.get_height()
        
        # Hitbox banknotu
        self.hitbox = pygame.Rect(self.x_cord, self.y_cord, self.width, self.height)

    def tick(self):
        # Aktualizacja hitboxa
        self.hitbox = pygame.Rect(self.x_cord, self.y_cord, self.width, self.height)

    def draw(self):
        # Rysowanie banknotu
        window.blit(self.image, (self.x_cord, self.y_cord))


def main():
    # Flaga działania gry
    run = True
    
    # Obiekt gracza
    player = Player()
    
    # Zegar gry
    clock = 0
    
    # Wynik
    score = 0
    
    # Lista banknotów
    banknotes = []
    
    # Wczytanie tła
    background = pygame.image.load(os.path.join(os.path.dirname(__file__), "tło.png"))
    
    while run:
        # Aktualizacja zegara
        clock += pygame.time.Clock().tick(60) / 1000  # Maksymalnie 60 fps
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:  # Wyjście z gry
                run = False
        
        # Odczyt wciśniętych klawiszy
        keys = pygame.key.get_pressed()
        
        # Co 2 sekundy dodaj nowy banknot
        if clock >= 2:
            clock = 0
            banknotes.append(Cash())

        # Aktualizacja gracza
        player.tick(keys)
        
        # Aktualizacja banknotów
        for banknote in banknotes:
            banknote.tick()

        # Kolizje gracza z banknotami
        for banknote in banknotes:
            if player.hitbox.colliderect(banknote.hitbox):
                banknotes.remove(banknote)
                score += 1

        # Rysowanie elementów
        window.blit(background, (0, 0))  # Rysowanie tła
        player.draw()
        for banknote in banknotes:
            banknote.draw()
        
        # Aktualizacja ekranu
        pygame.display.update()

    # Wyświetlenie wyniku
    print(f"Twój wynik: {score}")


# Uruchomienie gry
if __name__ == "__main__":
    main()

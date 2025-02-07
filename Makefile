CC1:=docker compose
IMAGE:=CSV_TO_SQLTable

.PHONY: build up logs stop clean pnpm-start

all: build

build:
	@$(CC1) up --build -d

up:
	@$(CC1) up -d

logs:
	@$(CC1) logs --tail=100 -f

stop:
	@$(CC1) stop

clean:
	@$(CC1) down

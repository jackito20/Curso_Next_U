-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema agencia
-- -----------------------------------------------------
-- .

-- -----------------------------------------------------
-- Schema agencia
--
-- .
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `agencia` DEFAULT CHARACTER SET utf8 ;
USE `agencia` ;

-- -----------------------------------------------------
-- Table `agencia`.`oficinas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`oficinas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `agencia`.`agente_viaje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`agente_viaje` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `oficinas_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_agente_viaje_oficinas_idx` (`oficinas_id` ASC),
  CONSTRAINT `fk_agente_viaje_oficinas`
    FOREIGN KEY (`oficinas_id`)
    REFERENCES `agencia`.`oficinas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `agencia`.`turistas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`turistas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `edad` INT NULL,
  `genero` ENUM('Femenino', 'Masculino') NULL,
  `direccion` VARCHAR(256) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `agencia`.`destinos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`destinos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` ENUM('Ciudad', 'Region') NULL,
  `popularidad` INT NULL,
  `imagen` VARCHAR(255) NULL,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `agencia`.`hoteles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`hoteles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `direccion` VARCHAR(255) NULL,
  `imagen` VARCHAR(255) NULL,
  `destinos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_hoteles_destinos1_idx` (`destinos_id` ASC),
  CONSTRAINT `fk_hoteles_destinos1`
    FOREIGN KEY (`destinos_id`)
    REFERENCES `agencia`.`destinos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `agencia`.`promociones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`promociones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha_inicio` DATE NOT NULL,
  `fecha_fin` DATE NOT NULL,
  `precio` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `hoteles_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_promociones_hoteles1_idx` (`hoteles_id` ASC),
  CONSTRAINT `fk_promociones_hoteles1`
    FOREIGN KEY (`hoteles_id`)
    REFERENCES `agencia`.`hoteles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `agencia`.`ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agencia`.`ventas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha_venta` DATE NOT NULL,
  `agente_viaje_id` INT NOT NULL,
  `turistas_id` INT NOT NULL,
  `promociones_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ventas_agente_viaje1_idx` (`agente_viaje_id` ASC),
  INDEX `fk_ventas_turistas1_idx` (`turistas_id` ASC),
  INDEX `fk_ventas_promociones1_idx` (`promociones_id` ASC),
  CONSTRAINT `fk_ventas_agente_viaje1`
    FOREIGN KEY (`agente_viaje_id`)
    REFERENCES `agencia`.`agente_viaje` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ventas_turistas1`
    FOREIGN KEY (`turistas_id`)
    REFERENCES `agencia`.`turistas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ventas_promociones1`
    FOREIGN KEY (`promociones_id`)
    REFERENCES `agencia`.`promociones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
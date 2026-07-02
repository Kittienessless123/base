<?php

class Singletone
{
  private static ?Singletone $instance = null;

  private function __construct() {}

  public static function getInstance()
  {
    if (self::$instance === null) {
      self::$instance = new Singletone();
    }
    return self::$instance;
  }
}

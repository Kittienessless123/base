<?php

class House
{
  public string $type = '';    // деревянный, кирпичный 

  public int $square = 0; //площадь 
  public int $rooms = 0; // колво комнат 

}

class Manual
{
  public string $text = '';    // Текстовое описание дома
  public array $warnings = []; // Предупреждения по эксплуатации
}

interface IBulder
{

  public function setSquare(int $square);
  public function setHouseType(string $type);
  public function setRooms(int $rooms);
  public function reset();
}


class HouseBuilder implements IBulder
{
  public function __construct()
  {
    $this->reset();
  }
  private House $house;
  public function reset()
  {
    $this->house = new House();
  }
  public function setSquare(int $square)
  {
    $this->house->square = $square;
  }
  public function setHouseType(string $type)
  {
    $this->house->type = $type;
  }
  public function setRooms(int $rooms)
  {
    $this->house->rooms = $rooms;
  }
  public function getResult(): House
  {
    return $this->house;
  }
}



class HouseManualBuilder  implements IBulder
{
  public function __construct()
  {
    $this->reset();
  }
  private Manual $manual;
  public function reset()
  {
    $this->manual = new Manual();
  }
  public function setSquare(int $square)
  {
    $this->manual->text .= "Площадь дома: $square кв.м.\n";
  }
  public function setHouseType(string $type)
  {
    $this->manual->text .= "Тип постройки: $type\n";
    if ($type === 'wood') {
      $this->manual->warnings[] = 'Требуется обработка от гниения каждые 3 года';
    }
  }
  public function setRooms(int $rooms)
  {
    $this->manual->text .= "Количество комнат: $rooms\n";
  }
  public function getResult(): Manual
  {
    return $this->manual;
  }
}
class Director
{

  private IBuilder $builder;
  public function getBuilder()
  {
    return $this->builder;
  }

  public function setBuilder($builder)
  {
    $this->builder = $builder;
  }
  public function __construct(IBuilder $builder)
  {
    $this->builder = $builder;
  }
  public function buildSmallHouse()
  {
    $this->builder->reset();
    $this->builder->setHouseType('wood');
    $this->builder->setSquare(50);
    $this->builder->setRooms(2);
  }
}


class SomeClass
{
  public Director $director;


  public function build()
  {
    $this->director->setBuilder(new HouseBuilder());

    $this->director->buildSmallHouse();
    $house = $this->director->getBuilder()->getResult();
    $this->director->setBuilder(new HouseManualBuilder());
    $this->director->buildSmallHouse();
    $manual = $this->director->getBuilder()->getResult();
  }
}

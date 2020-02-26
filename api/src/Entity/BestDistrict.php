<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * BestDistrict
 *
 * @ORM\Table(name="best_district")
 * @ORM\Entity
 */
class BestDistrict
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_district", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idDistrict;

    /**
     * @var int
     *
     * @ORM\Column(name="position", type="integer", nullable=false)
     */
    private $position;

    /**
     * @var int
     *
     * @ORM\Column(name="count", type="integer", nullable=false)
     */
    private $count;

    /**
     * @var int
     *
     * @ORM\Column(name="nbr_location", type="integer", nullable=false)
     */
    private $nbrLocation;

    /**
     * @var int
     *
     * @ORM\Column(name="moy", type="integer", nullable=false)
     */
    private $moy;

    /**
     * @var string
     *
     * @ORM\Column(name="district", type="string", length=255, nullable=false)
     */
    private $district;


}

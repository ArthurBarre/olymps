<?php

namespace App\Repository;

use App\Entity\BestDistrict;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method BestDistrict|null find($id, $lockMode = null, $lockVersion = null)
 * @method BestDistrict|null findOneBy(array $criteria, array $orderBy = null)
 * @method BestDistrict[]    findAll()
 * @method BestDistrict[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BestDistrictRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BestDistrict::class);
    }

    // /**
    //  * @return BestDistrict[] Returns an array of BestDistrict objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    public function findByDistrict($value)
    {
        return $this->createQueryBuilder('bd')
            ->andWhere('bd.district = :district')
            ->setParameter('district', $value)
            ->getQuery()
            ->execute();
    }
}

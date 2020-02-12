<?php

namespace App\Repository;

use App\Entity\HandyType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method HandyType|null find($id, $lockMode = null, $lockVersion = null)
 * @method HandyType|null findOneBy(array $criteria, array $orderBy = null)
 * @method HandyType[]    findAll()
 * @method HandyType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HandyTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HandyType::class);
    }

    // /**
    //  * @return HandyType[] Returns an array of HandyType objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?HandyType
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

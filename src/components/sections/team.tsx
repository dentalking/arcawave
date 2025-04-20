'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// 샘플 팀 데이터 - 실제 데이터로 교체 필요
const teamMembers = [
  {
    name: "두지언",
    role: "CEO / Founder",
    bio: "AR/VR 기술 전문가. 전 Google AR 팀 리드. KAIST 전산학 박사.",
    image: "/images/team/placeholder-1.jpg",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  },
  {
    name: "김예슬",
    role: "CTO",
    bio: "AI 연구 전문가. 전 네이버 랩스 AI 연구원. 서울대 컴퓨터공학 박사.",
    image: "/images/team/placeholder-2.jpg",
    social: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/"
    }
  },
  {
    name: "박창현",
    role: "Chief Curator",
    bio: "현대미술 전문 큐레이터. 전 국립현대미술관 큐레이터. 홍익대 미술사학 석사.",
    image: "/images/team/placeholder-3.jpg",
    social: {
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/"
    }
  },
  {
    name: "이지훈",
    role: "CMO",
    bio: "디지털 마케팅 전문가. 전 카카오 마케팅 리드. 연세대 경영학 석사.",
    image: "/images/team/placeholder-4.jpg",
    social: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  }
]

const advisors = [
  {
    name: "정현우",
    role: "Art Advisor",
    bio: "갤러리 현대 전 대표. 아트바젤 아시아 자문위원.",
    image: "/images/team/advisor-1.jpg"
  },
  {
    name: "양지영",
    role: "Tech Advisor",
    bio: "메타 XR 연구소장. AR/VR 분야 특허 15건 보유.",
    image: "/images/team/advisor-2.jpg"
  },
  {
    name: "송민호",
    role: "Investment Advisor",
    bio: "벤처캐피탈 파트너. 아트테크 분야 투자 전문가.",
    image: "/images/team/advisor-3.jpg"
  }
]

const achievements = [
  {
    title: "대한민국 모바일 어워드",
    description: "문화예술 분야 최우수상 (2024)"
  },
  {
    title: "실감형 콘텐츠 대상",
    description: "과학기술정보통신부 장관상 (2023)"
  },
  {
    title: "CES 혁신상",
    description: "AR/VR 카테고리 (2023)"
  },
  {
    title: "스타트업 그라인드",
    description: "글로벌 Top 50 선정 (2023)"
  }
]

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-4"
          >
            팀 소개
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            기술과 예술의 경계를 허무는 전문가들이 모여 ArcaWave를 만들어 갑니다.
          </motion.p>
        </div>

        {
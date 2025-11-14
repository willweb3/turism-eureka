'use client';

import React from 'react';
import { DesignSystemLayout } from '@/design-system/demo/DesignSystemLayout';

export default function DesignSystemLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DesignSystemLayout>{children}</DesignSystemLayout>;
}

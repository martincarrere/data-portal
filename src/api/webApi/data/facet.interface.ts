/*
         Copyright 2021 EPOS ERIC

 Licensed under the Apache License, Version 2.0 (the License); you may not
 use this file except in compliance with the License.  You may obtain a copy
 of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an AS IS BASIS, WITHOUT
 WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 License for the specific language governing permissions and limitations under
 the License.
 */
import { Identifiable } from './identifiable.interface';
/**
 * Represents a node in a tree that may have child nodes, and optionally data of type T.
 */
export interface Facet<T> extends Identifiable {
  /**
   * The child facets of this facet.
   */
  getChildren(): Array<Facet<T>>;
  hasChildren(): boolean;

  /**
   * The parent facet of this facet, or null if there is no parent i.e. a root.
   */
  getParent(): null | Facet<T>;


  /**
   * The data (leaves) of this facet.
   */
  getData(): Array<T>;

  /**
   * Flatten the data from this facet and all child facets into a flat list.
   */
  getFlatData(): Array<T>;

  addChild(child: Facet<T>): void;
}